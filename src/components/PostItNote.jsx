var React = require('react');
var ReactDOM = require('react-dom');

var PostItNote = React.createClass({
    getInitialState:function(){
        return (
            {isEditMode: false,}
        );
    },

    componentWillMount: function(){
        var bckgrd = ["#C7F464","#EB6841","#79BD9A","#3B8686"];
        var randomBgr = Math.floor(Math.random()*bckgrd.length);
        this.style = {
            backgroundColor: bckgrd[randomBgr],
            right: this.randomInMinMax(0, window.innerWidth - 225) + 'px',
            top: this.randomInMinMax(0, window.innerHeight - 225) + 'px',
            transform: 'rotate('+ (this.randomInMinMax(0, 15)*this.randomPosNegNumber()) + 'deg)'
        };
        //To Edit mode when add new note
        if(this.props.children ==="")
            this.setState({isEditMode:true});
    },

    randomPosNegNumber:function(){
        return (Math.random()<0.5 ? 1 : -1);
    },

    randomInMinMax:function(min, max){
        return (min + Math.floor(Math.random()*max));
    },

    componentDidMount: function(){
        //draggable() is in jquery-ui
        $(ReactDOM.findDOMNode(this)).draggable();
    },
    
    editNote: function(){
        this.setState({isEditMode:true});
    },
    
    saveNote: function(){
        this.props.onChange(this.refs.newNote.value, this.props.index);
        this.setState({isEditMode:false});
    },
    
    cancelEdit: function(){
        this.setState({isEditMode:false});
    },
    
    deleteNote: function(){
        this.props.onRemove(this.props.index);
    },
    
    renderNoteDisplay: function(){
        return(
            <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <h6>{this.props.key}</h6>
                <span>
                    <button className="btn btn-sm btn-primary glyphicon glyphicon-edit"
                        onClick={this.editNote}>
                    </button>
                    <button className="btn btn-sm btn-danger glyphicon glyphicon-trash"
                        onClick={this.deleteNote}>
                    </button>
                </span>
            </div>
        );
    },
    
    renderNoteEdit: function(){
        return(
            <div className="note" style={this.style}>
                <textarea
                    defaultValue={this.props.children}
                    ref="newNote" placeholder="Click here to start..."
                    className="form-group">
                </textarea>
                <button className="btn btn-sm btn-success glyphicon glyphicon-floppy-disk"
                    onClick={this.saveNote}>
                </button>
                <button className="btn btn-sm btn-warning glyphicon glyphicon-remove-circle"
                        onClick={this.cancelEdit}>
                </button>
            </div>
        );
    },
    
    render: function(){
        return (this.state.isEditMode? this.renderNoteEdit(): this.renderNoteDisplay());
    }
    
});

module.exports = PostItNote;