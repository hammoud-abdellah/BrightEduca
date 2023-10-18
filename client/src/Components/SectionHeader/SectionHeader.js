import './SectionHeader.css'


const SectionHeader = (props) => {
  return (
    <>
      <div className='section-header'>
        <h1>{props.children}</h1>
      </div>
      
    </>
  )
}

export default SectionHeader
