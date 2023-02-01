import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { getImageUrl } from './super';
import { Button, Space, Tag } from 'antd';
import './App.css'
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};


const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return(
  <Card
    style={{ width: 400, height:300 }}
    
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
<h1 className='h1'>The Boys</h1>
<h2 className='h2'>Homelander</h2>

    <div className='im1'>
      
      <section className='im1'>
  
        <img
          className="im1"
          src={getImageUrl('szV5sdG')}
          alt="Homelander"
          width={100}
          height={100} />
      </section>
    </div>
    <Space size={[0, 8]} wrap>

    <Tag>habilidad #1</Tag>
    
    <Tag closable onClose={log}>
    habilidad #2
    </Tag>

    <Tag closable onClose={preventDefault}>
    habilidad #3
    </Tag>
  </Space>

  <Carousel afterChange={onChange}>
      <div>
      <h1>STARLIGTH, DEEP, TRANSLUCENT</h1>
      <img className="im2" src="https://expansionradial.mx/wp-content/uploads/2019/09/The-Boys-de-Amazon-Prime-1024x576.jpg" alt="superheroes" />
      </div>

      

      <div>
      <h1>MAEVE, BLACK NOIR, A-TRAIN </h1>
      </div>


      


      <div>
      <h1>HOMELANDER</h1>
      </div>


     
      
    </Carousel>
    <div>
    <Space wrap>
    <Button>Descartar</Button>
    <Button  type="primary">Usar</Button>
    </Space>
    </div>
  </Card>
  )
};

export default App;