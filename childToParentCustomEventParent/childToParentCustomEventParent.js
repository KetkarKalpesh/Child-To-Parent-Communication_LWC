import { LightningElement } from 'lwc';

export default class ChildToParentCustomEventParent extends LightningElement {
    showData = false
    msg

    handleClick(){
        //console.log(this.showData)
        this.showData = true
    }

    closeHandler(event){
        this.msg = event.detail.msg
        this.showData = false
    }
}