export class AppareilService {
    appareils=[
        {
          name:'machine a laver',
          status:'eteint'
        },
        {
          name:'frigo',
          status:'allume'
        },
        {
          name:'ordinateur',
          status:'eteint'
        }
      ];
      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allume';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'eteint';
        }
    }
  
  
}