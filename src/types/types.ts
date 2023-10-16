export interface ValuesSelectorProps {
    checkboxType: 'interval' | '5minBreak',
    updateWhenTargetAchieved: boolean
    setFunction: React.Dispatch<React.SetStateAction<boolean>>; // The state-setting function
}

export interface RootState {
    timer: {
      count: number;
      interval?: boolean;
      break?: boolean;
    };
}

export interface TimeValues {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    secondTenths: number
}

export interface GlobalState {
count: number;
interval: boolean;
isBreak: boolean;
viewMode: string;
timeValues: TimeValues;
};

export interface Action {
type: string;
payload: string | TimeValues;
};
