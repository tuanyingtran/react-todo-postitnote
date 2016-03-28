var React = require('react');

var CheckBox = React.createClass({
    getInitialState:function(){
        return {isCheck:true};    
    },
    checkHandler:function(){
        this.setState({isCheck: !this.state.isCheck});
    },
    
    render: function(){
        var msg;
        this.state.isCheck?msg="checked":msg="unchecked";
        return(
            <div>
                <input type="checkbox" onChange={this.checkHandler} defaultChecked={this.state.isCheck}/>
                <p>Check box: {msg}</p>
            </div>
            
        );
    }
    
});

module.exports = CheckBox;