import react from 'React';
import axios from'../axios';

class Word extends Component{
    constructor(props){
        super(props);
        this.state ={
            loaded: false,
            word: {}
        };
    }

    componentDidMount(){
        let {id} = this.props;

        axios.get(`/words/${id}`).then(({data}) => {
        this.setState({
            loaded: true,
            word: data.data,
        });
        })

    }

    render(){
       
        let{ loaded, word } = this.state;

        return !loaded ? <Loading /> : (
        <>
        <h1>{ word }</h1>
        <article>
            <h2>{word.word}</h2>
            <p>{word.definition}</p>
            
        </article>
        </>


        );
    }
}

export default Word;
