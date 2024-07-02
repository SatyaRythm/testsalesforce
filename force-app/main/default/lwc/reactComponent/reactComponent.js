import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import REACT_APP from '@salesforce/resourceUrl/testReactComponent';

export default class TestReact extends LightningElement {
    async renderedCallback() {
        if (this.isReactAppInitialized) {
            return;
        }
        this.isReactAppInitialized = true;
    
        console.log(REACT_APP + '/static/js/main.0618c91e.js', "console log");
        
        try {
            await Promise.all([
                loadScript(this, REACT_APP + '/static/js/main.e3acecf2.js'),
                loadStyle(this, REACT_APP + '/static/css/main.f855e6bc.css')
            ])
            .then((values) => {
                console.log(values);
                this.initializeReactApp();
            })
        } catch (error) {
            console.log(error)
        }
    }

    initializeReactApp() {
        const reactRoot = this.template.querySelector('.react-root');
        if (reactRoot) {
            // Assuming your React app is bundled with an entry point that attaches to a DOM element
            window.ReactApp.init(reactRoot);
        }
    }
}