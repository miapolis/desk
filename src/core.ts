import { Guild } from './content-manager';

export type Message = {
    username: string;
    text: string;
    time: string;
}; 

export type ClientMessage = {
    guildId: string;
    username: string;
    text: string;
}

export class GuildJoinData {
    readonly GuildName:string;
    readonly CachedMessages:Array<Guild>;
    constructor(guildName:string) {
        this.GuildName = guildName;
        this.CachedMessages = new Array<Guild>();
    }
}