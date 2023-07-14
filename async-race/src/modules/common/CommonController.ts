import CommonView from './CommonView';

class CommonController {
    private readonly COMMON_VIEW: CommonView;

    constructor(view: CommonView) {
        this.COMMON_VIEW = view;
    }

    public async init(): Promise<void> {
        this.COMMON_VIEW.setupDOMElementsAndEventHandlers();
    }
}
export default CommonController;
