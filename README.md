# market_simplified_task
Launch Project:<br />
This project is done in react native expo cli. <br />
npm install to install the modules <br />
expo start to start the dev mode <br />
scan the qr code from the expo app in mobile <br />
project will run. <br />
app sample images are provides in snapshots folder <br />

# code explanation
Loading Screen:<br />
1.When app launches it checks weather user logged in already by the token is present in async storage.<br/>
2.If token presents then it will launch to Dashboard page.
3.If token is undefined then will go the user log in page.
<br />
<br />
Log In Screen:<br />
1.Here the user log in by their credential.
2.Sucessfull log in jwt web token is stores in device which will be useful in future for making any api request for our server.
3.The token is the authorization that the user is logged in.
<br />
<br />
Dashboard Screen:<br/>
1.First The fetched api result is checked weather is in storage.<br/>
2.If its present the datas are shown in Flatlist.<br/>
3.If data is not present then the Internet connectivity of the mobile is checked weather it has Internet on and if its not on Network Connectivity Toast is shown.<br/>
3.If Internet is on then api request is made by axios and data is shown.

#Error Handling:
If Internet is off or no data is fetched or error while api call the user has an option to reload the 
api.<br/>
<br/>
<br/>
$Integrations Used:<br/>
For UI Components Native-base is used.<br/>
For Api call Axios is used.<br/>




