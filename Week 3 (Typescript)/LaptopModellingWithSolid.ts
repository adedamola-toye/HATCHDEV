class Laptop{
    powerState:boolean;
    constructor(
        public bit: BitKind, 
        public display: Display, 
        public nic : NetworkInterfaceCard,
        public hd : HardDisk,
        public keyBoards: KeyBoard[],
        public operatingSystem : OperatingSystem,
        private powerManager: PowerManager,
        private updateManager: UpdateManager,
        private specificationsDisplay: SpecificationsDisplay
    ){}

    shutDown(){
        this.powerManager.shutDown();
    }

    switchOn(){
        this.powerManager.switchOn();
    }

    update<T extends Updateable>(thingToUpdate: T, newValue: UpdateValue<T>){
        return this.updateManager.update(thingToUpdate, newValue, this);
    }

    displayLaptopSpecifications():void{
        this.specificationsDisplay.displayLaptopSpecifications(this);
    }

    displayUpdateLogs(): void{
        this.updateManager.displayUpdateLogs();
    }
    
}



class PowerManager{
    private powerState: boolean;
    shutDown(): void{
        this.powerState = false;
    }

    switchOn(): void{
        this.powerState = true;
    }

    getPowerState():boolean{
        return this.powerState;
    }

}

class UpdateManager{
    private updateLogs: string[] = [];

    update<T extends Updateable>(thingToUpdate: T, newValue: UpdateValue<T>, laptop: Laptop){
        let error: string = "";

        switch(thingToUpdate){
            case "display" :
                if(!(newValue instanceof Display)){
                    error = "Invalid input. The new value must be of instance Display";
                    return error;
                }
                laptop.display = newValue;
                this.updateLogs.push(`Display updated: Type - ${newValue.type}, Size - ${newValue.size} `);
                break;

            case "nic":
                if(typeof newValue !=="string"){
                    error = "Invalid input : The new nic value must be a string";
                    return error;
                }
                laptop.nic.name = newValue;
                this.updateLogs.push(`NIC updated to ${newValue}`);
                break;

            case "hardDisk":
                if(!(newValue instanceof HardDisk)){
                    error = "Invalid input. The new value must be an instance of HardDisk";
                    return error;
                }
                laptop.hd = newValue;
                this.updateLogs.push(`Hard Disk updated: type - ${newValue.type}, size - ${newValue.size}`);
                break;

            case "keyboard":
                if(!(newValue instanceof KeyBoard)){
                    error = "Invalid input. The new value must be an instance of Keyboard";
                    return error;
                }
                laptop.keyBoards.push(newValue);
                this.updateLogs.push(`Keyboard updated: ${newValue.kind} keybord with ${newValue.layout} layout`);
                break;
            
            case "os":
                if(!(newValue instanceof OperatingSystem)){
                    error = "Invalid input :  The new value must be an instance if OperatingSystem";
                    return error;
                }
                laptop.operatingSystem = newValue;
                this.updateLogs.push(`Operating System updated: Kind: ${newValue.kind}, Version - ${newValue.version}`);
                break;     
        }
    }
    displayUpdateLogs(){
        console.log("\nAll updates made: \n" + this.updateLogs.join("\n"));
    }


}

class SpecificationsDisplay{
    displayLaptopSpecifications(laptop: Laptop){
        console.log(`\nLaptop Specifications: \nBit size : ${laptop.bit} \nDisplay Type : ${laptop.display.type} \nDisplay Size : ${laptop.display.size} \nNetwork Interface Card : ${laptop.nic.name} \nHard Disk Type : ${laptop.hd.type} \nHard Disk Size : ${laptop.hd.size} \nOperating System : ${laptop.operatingSystem.kind} \nOperating System Version : ${laptop.operatingSystem.version}\n `);
        laptop.keyBoards.forEach((keyboard, index) => {
            console.log(`Keyboard ${index + 1}: \n\t Type : ${keyboard.kind} \n\t Layout : ${keyboard.layout}`);
        }) 
    }
}


class KeyBoard{
    /* kind: KeyBoardKind; //kind: "in-built" | "external";
    layout : KeyBoardLayout;  // layout : "Qwerty" | "Qwertz" | "Azerty";  

    set keyboardType(kind : KeyBoardKind){
        this.kind = kind;
    }

    set keyboardLayout(layout : KeyBoardLayout){
        this.layout = layout
    } */
    constructor(public kind: KeyBoardKind, public layout : KeyBoardLayout){}

}


class NetworkInterfaceCard{
    //name: string;
    constructor(public  name : string){  //the public is saying the name is an instance property

    }
}

class Display{
    size : number;
    type: DisplayType;

    set displaySize(val: number){   //Special setter
        this.size = val;
    }
    setDisplayType(type: DisplayType){  //Normal method
        this.type = type;
    }
}

class HardDisk{
    /* type: HardDiskType;
    size: number;

    set hardDiskSize(val: number){
        this.size = val;
    }

    set hardDiskType(type:HardDiskType){
        this.type = type;
    } */
    constructor(public type: HardDiskType, public size: number){

    }
}

class OperatingSystem{
    /* kind : OsKind;
    version : number;

    set osKind(type : OsKind){
        this.kind = type;
    }

    set osVersion(versionNo : number){
        this.version = versionNo;
    } */
    constructor(public kind: OsKind, public version: number){}
}


//Creating a custom keyboard type
type KeyBoardKind = "in-built" | "external" | "on-screen";

//Custom type for keyboard layout
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

//Custom type for Operating system
type OsKind = "Linux" | "Mac" | "Windows";

type BitKind = "x64" | "x32" | "x86";

type DisplayType = "amoled" | "lcd" | "oled";

type HardDiskType = "ssd"  | "hdd"

type Updateable = "nic" | "os" | "display" | "keyboard" | "hardDisk";

type UpdateValue<T extends Updateable> =
        T extends "keyboard" ? KeyBoard: //if thing to update T is keyboard, then UpdateVale<T> is of type KeyBoard
        T extends "nic" ? string:
        T extends "display" ? Display:
        T extends "hardDisk" ? HardDisk:
        T extends "os" ? OperatingSystem : never;

        
export {Laptop, BitKind, Display, DisplayType,NetworkInterfaceCard,  HardDisk , HardDiskType, KeyBoard, KeyBoardKind, KeyBoardLayout,  OperatingSystem};

