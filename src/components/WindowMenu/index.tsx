import useWindows from '@/hooks/useWindows';
import { Item, ItemParams, Menu, Separator, Submenu } from 'react-contexify';

export const MENU_ID = 'win-menu-id';

const WindowMenu = () => {
  const { nextDesktopBackground } = useWindows();
  const handleMenuItemClick = (item: ItemParams) => {
    console.log('ItemParams', item);
    if (item.id === 'nextDesktopBackground') {
      nextDesktopBackground();
    }
  };
  return (
    <Menu id={MENU_ID}>
      <Submenu label="View">
        <Item onClick={handleMenuItemClick}>Sub Item 1</Item>
        <Item onClick={handleMenuItemClick}>Sub Item 2</Item>
      </Submenu>
      <Submenu label="Sort by">
        <Item onClick={handleMenuItemClick}>Name</Item>
        <Item onClick={handleMenuItemClick}>Size</Item>
        <Item onClick={handleMenuItemClick}>Date modify</Item>
      </Submenu>
      <Item onClick={handleMenuItemClick}>Refresh</Item>
      <Separator />
      <Submenu label="New">
        <Item onClick={handleMenuItemClick}>Sub Item 1</Item>
        <Item onClick={handleMenuItemClick}>Sub Item 2</Item>
      </Submenu>
      <Separator />
      <Item onClick={handleMenuItemClick}>Display settings</Item>
      <Item onClick={handleMenuItemClick}>Personalize</Item>
      <Item id="nextDesktopBackground" onClick={handleMenuItemClick}>
        Next desktop background
      </Item>
    </Menu>
  );
};

export default WindowMenu;
