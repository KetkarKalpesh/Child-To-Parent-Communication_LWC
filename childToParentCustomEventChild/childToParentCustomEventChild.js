import { LightningElement } from 'lwc';

export default class ChildToParentCustomEventChild extends LightningElement {
    closeHandle(){
        const closeEvent = new CustomEvent('close', {
            detail: {
                msg: "Component Closed Succesfully!!!"
            }
        })
        this.dispatchEvent(closeEvent)
    }
}