import logo from './logo.svg';
import './App.css';
import { Breadcrumb, BreadcrumbItem,Button,MenuList, BreadcrumbLink, Menu, MenuButton, MenuItem } from '@chakra-ui/react';

function App() {
  
  
    return (
      <div  className="top">
<img className="logosize"src={logo} alt="phto"/>
  <div className='flexbox'>
    
    <div>
    <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>
    <Menu>
  <MenuButton as={Button} >
   Inspiration
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>
    <Menu>
  <MenuButton as={Button} >
   Find Work
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink  href='#'>
      <h1>find work</h1>
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </div>


    <div>
<div className='left'>
<Breadcrumb>

 

<BreadcrumbItem isCurrentPage>
  <BreadcrumbLink href='#'>
    <div className="find">Sign In</div>
  </BreadcrumbLink>
</BreadcrumbItem>
  </Breadcrumb>
  <Button colorScheme='blue'>Sign Up</Button>
</div>
    </div>
   
  </div>
  </div>
    );
  }


export default App;
