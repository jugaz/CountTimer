export const useCount = (date) => {
  const countDownDate = new Date(date).getTime();

  const setElementValues = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
    const minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
    const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

    const addLeadingZero = (num) => {
      return num.toString().padStart(2, '0');
    };

    setElementValues('.days', addLeadingZero(days));
    setElementValues('.hours', addLeadingZero(hours));
    setElementValues('.minutes', addLeadingZero(minutes));
    setElementValues('.seconds', addLeadingZero(seconds));

    if (distance <= 0) {
      clearInterval(interval);
      setElementValues('.days', '00');
      setElementValues('.hours', '00');
      setElementValues('.minutes', '00');
      setElementValues('.seconds', '00');
    }
  };

  const interval = setInterval(updateCountdown, 1000);
};

