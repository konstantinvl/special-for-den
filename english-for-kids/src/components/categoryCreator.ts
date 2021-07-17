import { newElem } from "../functions/createElem";
import { BaseComponent } from "./base-component";

export class CategoryCreator extends BaseComponent{

    name:HTMLInputElement;

    image:HTMLInputElement;

    submit:HTMLButtonElement;

    constructor(){
        super('form',['card-wrapper']);
        this.name=<HTMLInputElement> newElem("input",[]);
        this.image= <HTMLInputElement> newElem("input",[]);
        this.submit=<HTMLButtonElement> newElem('button',[])
        this.element.append(newElem('label',[],`Create Category`),
            newElem('label',[],`Category Name`),
            this.name,
            newElem('label',[],`Category Image`),
            this.image,
            this.submit
        )

    }
}