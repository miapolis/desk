import { Message } from './core';

export class Guild {
    private Id:string;
    private Name:string;
    private CachedMessages:Array<Message>;

    constructor(id:string, name:string) {
        this.Id = id;
        this.Name = name;
        this.CachedMessages = new Array<Message>();
    }

    public GetId() { return this.Id; }
    public GetName() { return this.Name; }
    public GetCachedMessages() { return this.CachedMessages; }

    public AddMessage(message:Message) {
        this.CachedMessages.push(message);
        if (this.CachedMessages.length > 100) {
            this.CachedMessages.shift();
        }
    }

    public SetID(id:string) { this.Id = id; }
    public SetName(name:string) { this.Name = name; }
}

class GuildContainer {
    private map:Map<string, Guild> = new Map<string, Guild>();
    private arr:Array<Guild> = new Array<Guild>();

    constructor(guilds:Array<Guild>) {
        this.arr = guilds;
        guilds.forEach((guild: Guild) => {
            this.map.set(guild.GetId(), guild);
        });
    }

    public Index(key:string) {
        return this.map.get(key);
    }

    public FindById(id:string) {
        return this.arr.find(x => x.GetId() === id);
    }
}

let arr:Array<Guild> = new Array<Guild>();
arr.push(new Guild('example', 'Example Server'));

export var Guilds:GuildContainer = new GuildContainer(arr);