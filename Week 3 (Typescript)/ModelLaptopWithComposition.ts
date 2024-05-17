class Laptop{
    powerState:boolean;
    updateLogs: string[] = [];
    constructor(
        public bit: BitKind, 
        public display: Display, 
        public nic : NetworkInterfaceCard,
        public hd : HardDisk,
        public keyBoards: KeyBoard[],
        public operatingSystem : OperatingSystem
        
    ){
        this.powerState = false;
    }

    shutDown(){
        this.powerState = false;
    }

    switchOn(){
        this.powerState = true;
    }

    private updateDisplay(newValue: Display): void{
        if(!(newValue instanceof Display)){
            throw new Error("Invalid input. The new value must be of instance Display");
        }
        this.display = newValue;
        this.updateLogs.push(`Display updated: Type - ${newValue.type}, Size - ${newValue.size} `);
        
    }

    private updateNic(newValue: string): void{
        if(typeof newValue !=="string"){
          throw new Error("Invalid input : The new nic value must be a string");
        }
        this.nic.name = newValue;
        this.updateLogs.push(`NIC updated to ${newValue}`);
    }

    private updateHardDisk(newValue : HardDisk){
        if(!(newValue instanceof HardDisk)){
            throw new Error("Invalid input. The new value must be an instance of HardDisk");
        }
        this.hd = newValue;
        this.updateLogs.push(`Hard Disk updated: type - ${newValue.type}, size - ${newValue.size}`);
    }

    private updateKeyboards(newValue: KeyBoard){
        if(!(newValue instanceof KeyBoard)){
           throw new Error("Invalid input. The new value must be an instance of Keyboard");
        }
        this.keyBoards.push(newValue);
        this.updateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`);
    }

    private updateOs(newValue: OperatingSystem){
        if(!(newValue instanceof OperatingSystem)){
            throw new Error("Invalid input :  The new value must be an instance if OperatingSystem");
        }
        this.operatingSystem = newValue;
        this.updateLogs.push(`Operating System updated: Kind: ${newValue.kind}, Version - ${newValue.version}`);
    }


    update<T extends Updateable>(thingToUpdate: T, newValue: UpdateValue<T>){

        switch(thingToUpdate){
            case "display" :
                if(newValue instanceof Display){
                    this.updateDisplay(newValue);
                }
                break;

            case "nic":
                if(typeof newValue == "string"){
                    this.updateNic(newValue);
                }
                break;

            case "hardDisk":
                if(newValue instanceof HardDisk){
                    this.updateHardDisk(newValue);
                }
                break;

            case "keyboard":
                if(newValue instanceof KeyBoard){
                    this.updateKeyboards(newValue);
                }
                break;
            
            case "os":
                if(newValue instanceof OperatingSystem){
                    this.updateOs(newValue);
                }
                break;   
            
            default:
                throw new Error("Invalid component type")
        }
    }

    displayLaptopSpecifications(){
        console.log(`\nLaptop Specifications: \nBit size : ${this.bit} \nDisplay Type : ${this.display.type} \nDisplay Size : ${this.display.size} \nNetwork Interface Card : ${this.nic.name} \nHard Disk Type : ${this.hd.type} \nHard Disk Size : ${this.hd.size} \nOperating System : ${this.operatingSystem.kind} \nOperating System Version : ${this.operatingSystem.version}\n `);
        this.keyBoards.forEach((keyboard, index) => {
            console.log(`Keyboard ${index + 1}: \n\t Type : ${keyboard.kind} \n\t Layout : ${keyboard.layout}`);
        }) 
    }

    displayUpdateLogs(){
        console.log("\nAll updates made: \n" + this.updateLogs.join("\n"));
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

