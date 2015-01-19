/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.shortName = "Ollie";

window.jobs = [
  
  {
    name: "Enjoying Lunch",
    description: "Nom nom nom",
    interuptable: true,
    times: [
      {
        day_of_week: null,
        start: {
          hour: 13
        },
        end: {
          hour: 14
        }
      }
    ]
  },
  
  {
    name: "Very important work",
    description: "Doing important work and stuff",
    interuptable: false,
    times: [
      //Monday
      {
        day_of_week: 1,
        start: {
          hour: 8
        },
        end: {
          hour: 18
        }
      }
    ]
  }
];