import { LightningElement } from 'lwc';

export default class ChildToParentCustomEventParent extends LightningElement {
    showData = false

    handleClick(){
        //console.log(this.showData)
        this.showData = true
    }

    closeHandler(){
        this.showData = false
    }
}