const Work = ({workHistory})=>{
    const works = workHistory.map((work)=>{
        return <li key={work.id}>{work.title}: <i>{work.description}</i></li> 
    })    
    return(
        <ul>
            {works}
        </ul>
    );
}
export default Work;