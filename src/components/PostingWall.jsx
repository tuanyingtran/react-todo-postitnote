var React = require ('react');
var PostedNote = require('./PostItNote.jsx');

var PostingWall = React.createClass({
    getInitialState: function(){
        return{
          postItNotes: []
        };
    },
    
    nextIdGen: function(){
        this.uniqueID = this.uniqueID || 0;
        return this.uniqueID++;
    },

    addNewNote: function(addNote){
        var tempArr = this.state.postItNotes;
        tempArr.push(
            {
            id: this.nextIdGen(),
            note: addNote
            });
        this.setState({postItNotes: tempArr});
    },
    
    updateBoardNote: function(newNote, currentIndex){
        var tempArr = this.state.postItNotes;
        tempArr[currentIndex].note = newNote;
        this.setState({postItNotes:tempArr});
    },
    
    removeBoardNote: function(eleIndex){
        var tempArr = this.state.postItNotes;
        tempArr.splice(eleIndex,1);
        this.setState({postItNotes:tempArr});
    },
    
    eachBoardNote: function(aNote, i){
        return (
            <PostedNote
                key={aNote.id}
                index={i}
                onChange={this.updateBoardNote}
                onRemove={this.removeBoardNote}>
                {aNote.note}
            </PostedNote>
        );
    },
    
    render: function(){
        return (
            <div className="board">
                <div className="container-fluid">
                    {this.state.postItNotes.map(this.eachBoardNote)}
                    <button className="btn btn-success glyphicon glyphicon-plus"
                            onClick={this.addNewNote.bind(null,"")}>
                    </button>
                </div>
            </div>
            
        );
    }
});

module.exports = PostingWall;