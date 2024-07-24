// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("25.904761904761905em")
                .setTop("19.80952380952381em")
                .setWidth("10.81904761904762em")
                .setHeight("2.742857142857143em")
                .setCaption("WINDOWS IS COMING")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setLeft("23.61904761904762em")
                .setTop("25.904761904761905em")
                .setWidth("15.161904761904761em")
                .setHeight("5.104761904761904em")
                .setCaption("ok I understand.")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput57")
                .setLeft("-26.666666666666668em")
                .setTop("42.666666666666664em")
                .setWidth("18em")
                .setHeight("9.371428571428572em")
                .setLabelSize("8em")
                .setLabelCaption("Color Picker")
                .setType("color")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar2")
                .setLeft("0em")
                .setTop("43.42857142857143em")
                .setWidth("60.8em")
                .setHeight("2.2857142857142856em")
                .setFillBG("#7FFF00")
                .setValue(75)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});