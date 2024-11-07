import { render } from 'preact';

import './index.less';
import "./Pwa";
import { Login } from './login';
import { Main } from './Main';
import { chatService } from '../ChatService';
import { useState } from 'preact/hooks';
import { useEffect } from 'preact/hooks';

function App() {
	let [renderCount, setRenderCount] = useState(1);
	console.log("App render count: " + renderCount);
	useEffect(() => {
		const listener = () => setRenderCount(x => x + 1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);
	return chatService.inbox ? <Main /> : <Login />
}

render(<App />, document.getElementById('app'));
