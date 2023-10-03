import Modell from "../model/Modell.js";
import ElemView from "../view/ElemView.js";
class Controller {
  constructor() {
    //példányosítjuk a modellt
    this.MODELL = new Modell();
    //példányosítjuk a View-t
    for (let index = 0; index < 9; index++) {
      new ElemView($(".jatekter"), index);
    }

    //feliartkozunk a view eseményeire
    $(window).on("kivalaszt", (event) => {
      //meg kell hívni a modell megfelelő tagfüggvényeit
      console.log(event.detail); //azt az objektumot jelenti, amelyik kiváltotta az eseményt
      this.MODELL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODELL.getErtek());
      /*Játék vége ellenőrzése*/

      if (this.MODELL.getVegeVanE()!=="tovabb") {
        console.log(this.MODELL.getVegeVanE())
      }
      
    });
  }
}
export default Controller;
