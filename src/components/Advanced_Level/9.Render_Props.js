export function RenderProps(props) {
    const handleMovve=(e)=>{
      console.log(e.clientX, e.clientY)
    };
    return(
        <div style={{height: "100vh"}} onMouseMove={handleMovve}>

        </div>
    )
}
