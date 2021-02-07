# Desk
Desk is a simple realtime messaging platform based on Discord. With Desk, users can send messages in servers that are restricted via an ID.

<br>

![alt Desk chatting application](https://github.com/Miapolis/Desk/blob/main/docs/desk_chat.png)
![alt Desk home page](https://github.com/Miapolis/Desk/blob/main/docs/desk_front_cover.png)

<br>

# Hosting a Server
Hosting for Desk can be easily done via [Heroku](https://www.heroku.com). <br>
1. Fork this repository 
2. Create a new Heroku application (if you are not familiar with Heroku, see [how to get started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs))
3. Under the Deploy tab of your application, for Deployment method, select GitHub
4. Below the deployment method in the next section, search for the name of your forked repository (should be yourusername/Desk)
5. Make sure the repository is connected, and either click **Enable Automatic Deploys**, or below manually click **Deploy Branch** for main
6. Wait for the build to pass, and then click **Open app** in the top right
7. Congratulations! Desk is now being hosted at **h<span>ttps://your-app-name.herokuapp.com**

# Creating a new Desk Guild 
Guilds and Servers can be used interchangeably. They are referred to as 'Guilds' in code to avoid confusion. 
1. Navigate to the [content-manager](https://github.com/Miapolis/Desk/blob/main/src/content-manager.ts). Here, all the configurations for guilds are stored
2. Add or edit existing guilds configured (the first argument for a Guild is the ID, and the second is the name)
```js
let arr:Array<Guild> = new Array<Guild>();
arr.push(new Guild('example', 'Example Server'));
```
3. Save changes and deploy 
4. When a user goes to the main page, in the Server ID input box they should enter the ID of your new guild

## View the [Wiki](https://github.com/Miapolis/Desk/wiki)
