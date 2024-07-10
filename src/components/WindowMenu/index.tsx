import useWindows from '@/hooks/useWindows';
import { Item, ItemParams, Menu, Separator, Submenu } from 'react-contexify';

export const MENU_ID = 'win-menu-id';

/**
 * 定义窗口菜单组件。
 * 
 * 该组件使用hooks获取窗口操作相关功能，并通过渲染菜单项来提供用户界面。
 * 菜单项的点击事件被处理以触发相应的窗口操作。
 */
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
