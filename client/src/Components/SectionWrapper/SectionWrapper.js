import './SectionWrapper.css'


const SectionWrapper = (props) => {
  return (
  <>
    <div className='Section-wrapper'>
      {props.children}
    </div>
    <br/>
    <br/>
  </>
   
  )
}

export default SectionWrapper
