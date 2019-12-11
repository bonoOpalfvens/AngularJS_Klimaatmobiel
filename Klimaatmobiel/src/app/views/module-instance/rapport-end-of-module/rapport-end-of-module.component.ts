import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModuleInstance } from 'src/app/models/module-instance'
import { Team } from 'src/app/models/team'
import { Router, ActivatedRoute } from '@angular/router';
import { ModuleInstanceStatus } from 'src/app/models/module-instance-status';
import { DataService } from 'src/app/services/data.service';
import { ScriptService } from 'src/app/services/script.service';

declare let pdfMake: any;

@Component({
  selector: 'app-rapport-end-of-module',
  templateUrl: './rapport-end-of-module.component.html',
  styleUrls: ['./rapport-end-of-module.component.css']
})
export class RapportEndOfModuleComponent implements OnInit {
  public moduleInstance: ModuleInstance;

  constructor(
    private _location: Location, 
    private route: ActivatedRoute,
    private scriptService: ScriptService) {
      console.log('Loading External Scripts');
      this.scriptService.load('pdfMake', 'vfsFonts');
    } 

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.moduleInstance = item.moduleInstance
    )
    console.log(this.moduleInstance);
    setTimeout(() => {
      this.load();
    }, 1000);
  }

  placePdfInPage(){
    const pdfDocGenerator = pdfMake.createPdf(this.getDocumentDefinition());
    pdfDocGenerator.getDataUrl((dataUrl) => {
      const targetElem = document.querySelector('#iframeContainer')
      const iframe = document.createElement('iframe');
      iframe.src = dataUrl;
      iframe.style.width = '1100px';
      iframe.style.height = '700px';
      iframe.style.textAlign = 'center';
      targetElem.appendChild(iframe);
    });
  }

  load(){
    if(!document.querySelector("iframe")){
      this.placePdfInPage();
    }   
  }

  get loadable(): boolean{
    return !document.querySelector("iframe");
  }

  generatePdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  getDocumentDefinition() {
    return {
      pageOrientation: 'landscape',
      content: [
        {
          text: 'Rapport van de teams voor ' + this.moduleInstance.klimModule.moduleNaam,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'Hieronder wordt per team een overzicht weergegeven van het huidige budget en de notities/commentaren.',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'Het startbudget : ' + this.moduleInstance.klimModule.standaardBudget,
          margin: [0, 0, 0, 20],
          bold: true
        },
        this.getTeamInfoObject(this.moduleInstance),
        {
          text: 'Dit rapport werd aangemaakt op : ' + this.getDate(),
          italics: true,
          margin: [0, 20, 0, 0]
        }
        ]
    }
  }
  
  getTeamInfoObject(moduleInstance: ModuleInstance){
    return {
      table: {
        widths: ['*','*', 520],
        body: [
          [{
            text: 'Naam',
            style: 'tableHeader',
            bold: true,
            alignment: 'center',
            margin: [0, 5, 0, 5]            
          },
          {
            text: 'Huidig budget',
            style: 'tableHeader',
            bold: true,
            alignment: 'center',
            margin: [0, 5, 0, 5]
          },
          {
            text: 'Notities/commentaar',
            style: 'tableHeader',
            bold: true,
            alignment: 'center',
            margin: [0, 5, 0, 5]
          },
          ],
          ...moduleInstance.teams.map(t => {
            console.log(t.notities)
            return [t.teamNaam, t.budget, t.notities ? t.notities : 'Geen notities of commentaar is toegevoegd voor dit team.' ]
          })
        ]
      }
    };
  }

  getDate(){
    var d = new Date();
    var result = d.toLocaleDateString("nl-BE");
    return result;
  }

  backToDashboard(){
    this._location.back();
  }
}

