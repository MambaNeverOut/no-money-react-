import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from 'components/TagsSection';
import { CategorySection } from './CategorySection';
import { NoteSection } from './NoteSection';
import { NumberPadSection } from './NumberPadSection';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction:column;
`
function Tags() {
  return (
    <MyLayout>
       <TagsSection/>
        <NoteSection/>  
        <CategorySection>
          <ul>
            <li className="selected">收入</li>
            <li>支出</li>
          </ul>
        </CategorySection>
        <NumberPadSection>
          <div className="output">100</div>
          <div className="pad clearfix">
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
        </NumberPadSection>
    </MyLayout>
  );
}

export default Tags