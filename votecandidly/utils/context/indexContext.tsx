'use client'

import { ISettings } from '@/types';
import {
	useState,
	useContext,
	createContext,
	useCallback,
	ReactNode,
} from 'react';



const defaultSettings: ISettings = {
	page: -1,
	index: 0,
	consumed: 0,
	id: ""
};

const SettingsContext = createContext({
	settings: defaultSettings,
	setSettings: (settings: ISettings) => { },
});

function SettingsProvider({ children, initialSettings }: { children: ReactNode, initialSettings: ISettings }) {
	const [settings, setSettings] = useState(initialSettings);

	return (
		<SettingsContext.Provider value={{ settings, setSettings }}>
			{children}
		</SettingsContext.Provider>
	);
}

function useSettings() {
	const settings = useContext(SettingsContext);

	if (settings === undefined) {
		throw new Error('useSettings must be used within a SettingsProvider');
	}

	return settings;
}

export { SettingsProvider, useSettings };