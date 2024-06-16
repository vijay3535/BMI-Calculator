 import { LightningElement,wire } from 'lwc';
import fetchOppData from '@salesforce/apex/lwcWrapperClassCtrl.fetchOppData'

export default class LwcWrapperClass extends LightningElement {
    @wire(fetchOppData) oppData;
    oppData({ error, data }) {
        if (data) {
            console.log("Data Return from Apex" +  data );
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }
}
