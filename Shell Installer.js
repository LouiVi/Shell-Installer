
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	apps = app.ReadFile( "list.txt" ).split("\n");
	s = "";
	for(a=0;a<apps.length;a++){
     s+="pkg install " + apps[a].split("/")[0] + " -y\n";
	}
	app.WriteFile( "install-all.sh.txt", s );
}