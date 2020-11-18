import React from 'react';
import {Wrapper} from './NumberPadSection/Wrapper'
import {generateOutput} from './NumberPadSection/generateOutput'

type Props = {
  value: number,
  onChange: (value:number) => void,
  onOk?: () => void
}

const NumberPadSection:React.FC<Props> = (props)=>{
  const output = props.value.toString()
  // const [output,_setOutput] = useState('0')
  const setOutput = (output:string)=>{
    let _output
    if(output.length>16){
      _output = parseFloat(output.slice(0,16))
    }else if(output.length === 0){
      _output = 0
    }else{
      _output = parseFloat(output)
    }
    props.onChange(_output)
  }
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent 
    console.log(text);
    
    if(text === null){return}
    if(text === 'ok'){
      // TODO
      if(props.onOk){
        props.onOk()
      }
      return ;
    }
    if('0123456789.'.split('').concat(['清空','删除']).indexOf(text)>=0){
      setOutput(generateOutput(text,output))
    }
  }
  return (
    <Wrapper>
        <div className="output">{output}</div>
          <div className="pad clearfix" onClick={onClickButtonWrapper}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="ok">OK</button>
            <button className="zero">0</button>
            <button className="dot">.</button>
          </div>
    </Wrapper>
  )
}

export { NumberPadSection}