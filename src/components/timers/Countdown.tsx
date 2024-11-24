import ActionButton from '../generic/ActionButton';
import DisplayWindow from '../generic/DisplayWindow';
import InputField from '../generic/Input';
import Loading from '../generic/Loading';
import { useTimer } from '../../utils/helpers';

//Create the countdown context

const Countdown = () => {
    const {
        time,
        isRunning,
        errorMessage,
        handlePlayPause,
        handleReset,
        handleFastForward, 
        setTimer,
    } = useTimer('countdown');

    
    // Convert time to minutes and seconds for display
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    // Handle minute change
    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        // Set the updated minutes while keeping the current seconds
        setTimer(value, seconds); // Update minutes, keep current seconds
    };

    // Handle second change (restricting to 0-59)
    const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);

        // Ensure value is between 0 and 59
        if (value > 59) {
            value = 59; // Reset to 59 if greater than 59
        } else if (value < 0) {
            value = 0; // Ensure seconds can't go negative
        }

        setTimer(minutes, value); // Set current minutes and updated seconds
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <DisplayWindow time={time} />
            {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                <InputField 
                value = {minutes} 
                onChange={handleMinuteChange}
                placeholder="Min:" 
                min={0} 
                disabled={isRunning} 
                isRunning={isRunning} />
                <InputField value={seconds} onChange={handleSecondChange} placeholder="Sec:" min={0} max={59} disabled={isRunning} isRunning={isRunning} />
            </div>
            <Loading.ActivityButtonContainer>
                <ActionButton name={isRunning ? 'Pause' : 'Play'} key="PausePlay" onClick={handlePlayPause} />
                <ActionButton name="Reset" key="Reset" onClick={handleReset} />
                <ActionButton name="FastForward" key="FastForward" onClick={handleFastForward} />
            </Loading.ActivityButtonContainer>
        </div>
    );
};

export default Countdown;

