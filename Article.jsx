import './Article.css';

const Ques_part = () => {
    return(
       <div className='Article'>
        <div className='Article2'>

        <p>
        Title: 
        </p>
        <input type="text" name='Title' placeholder='Start your question with how, what , why etc'/>
        </div>

        <div className='Article3'>
        <p>
        Share your problem!
        </p>
            <textarea name="area_text"  cols="30" rows="10"placeholder='enter 1-paragraph abstract here' ></textarea> 
        </div>

        <div className='Article4'>

        <p>Tags</p>
        <input type="text"  placeholder='Please add up to 3 tags to describe what your question is about  eg. C++'/>
        </div>


        <button>POST</button>
       </div> 
    )
}

export default Ques_part;
