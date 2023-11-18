class DOMHelpers {
    static createElement(type: string, classes: string[] = [], text = ''): HTMLElement {
        const element: HTMLElement = document.createElement(type);
        classes.forEach((className) => element.classList.add(className));
        if (text) {
            element.innerText = text;
        }
        return element;
    }

    static getElement<T extends HTMLElement>(selector: string): T {
        const element: T | null = document.querySelector(selector);
        if (element === null) {
            throw new Error(`Element with selector '${selector}' not found.`);
        }
        return element as T;
    }

    static getElements<T extends HTMLElement>(selector: string): T[] {
        const elements: T[] = Array.from(document.querySelectorAll(selector)) as T[];
        if (elements.length === 0) {
            throw new Error(`No elements found with selector '${selector}'.`);
        }
        return elements;
    }

    static appendImage(element: HTMLElement, path: string): void {
        const image: HTMLImageElement = new Image();
        image.src = path;
        element.appendChild(image);
    }

    static appendChildToElement<T extends HTMLElement>(parent: HTMLElement, child: T): void {
        parent.appendChild(child);
    }
}

export default DOMHelpers;
