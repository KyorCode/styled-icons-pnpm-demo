// working with PNPM, @styled-icons/... have to be installed as dependencies.
// import { ShoppingBag } from '@styled-icons/boxicons-solid'
// import { ChevronLeft, ChevronRight, Menu } from '@styled-icons/boxicons-regular';
// import { Times as Close } from '@styled-icons/typicons';

// not working with PNPM, due to internal references to @styled-icons/... counterpart packages
// and PNPM only installing top level dependencies.
import { ShoppingBag } from './node_modules/styled-icons/boxicons-solid';
import { ChevronLeft, ChevronRight, Menu } from './node_modules/styled-icons/boxicons-regular';
import { Times as Close } from './node_modules/styled-icons/typicons';

const IconsList = {
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Menu,
  Close
};

export default IconsList;
