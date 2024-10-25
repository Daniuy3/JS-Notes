


class SingletonTS {
    private static instance: SingletonTS;
    private version: string 

    private constructor(version : string) {
        this.version = version
    }

    static getInstance(version: string) {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }

        return SingletonTS.instance;
    }
}

const singletonTS1 = SingletonTS.getInstance('v1');
const singletonTS2 = SingletonTS.getInstance('v2');
