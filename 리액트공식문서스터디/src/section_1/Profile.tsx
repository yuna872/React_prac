/*
export 하는 방법에 따라 import 방식이 정해진다.

-------- default --------
- 원한다면 다른 이름으로 값을 가져올 수 있다.
export default function Button() {}
=> import Button from './Button.js';

-------- Named --------
- 양쪽 파일에서 사용하고자 하는 값의 이름이 동일한 경우 사용한다.
export function Button() {}
=> import { Button } from './Button.js';

** 보편적으로 한 파일에서 하나의 컴포넌트만 export 할 때 default export 방식을 사용하고, 여러 컴포넌트를 export할 경우에는 named export 방식을 사용한다.
*/

import Avatar from "./Avatar";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
export default Profile;
