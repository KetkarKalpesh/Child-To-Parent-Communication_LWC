import { LightningElement } from 'lwc';

export default class ChildToParentCustomEventChild extends LightningElement {
    closeHandle(){
        const closeEvent = new CustomEvent('close')
        this.dispatchEvent(closeEvent)
    }
}