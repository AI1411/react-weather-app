export class WeatherType {
    name: string;
    weather : any;
    main: any;
    ts: string

    constructor(name = "", weather = [], ts = "", main = []) {
        this.name = name;
        this.weather = weather;
        this.ts = ts;
        this.main = main;
    }
}
