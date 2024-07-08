import { useUserInfo } from '@/store/userStore';

export function TrialLinkCard() {
  const { username } = useUserInfo();
  return (
    <div
      className=" flex  flex-col items-center justify-between rounded-2xl p-6 py-12 max-lg:w-full"
      style={{ background: '#92d6e5', color: 'white' }}
    >
      <h1 className="text-'#D9DDE0' text-2xl font-semibold">Free Individual Assessment </h1>
      <div
        style={{ color: 'white', fontSize: '15px' }}
        className="mx-auto mb-6 mt-4 max-w-sm  text-sm  md:mx-0"
      >
        Join our EQ360 Emotional Intelligence Assessment free trial!. Track your progress with
        MyEQ360 and master your emotional skills for greater success. Understand yourself better and
        enhance your communication abilities with our comprehensive evaluation. Start mastering your
        emotions today and unlock your full potential!
      </div>
      <div className="flex flex-col gap-5">
        <a
          href="https://myeq360.com/"
          target="_blank"
          className=" text-base font-normal"
          style={{ color: 'white' }}
          rel="noreferrer"
        >
          What is your Emotional Intelligence?
        </a>
        <button
          className="font-mediumtext-black flex items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
          style={{ backgroundColor: '#0092B3', color: '#fff', padding: 7 }}
          onClick={() => window.open('https://myeq360.com/')}
        >
          <span className="ml-2 font-normal text-['20px']">Attempt Free Assessment</span>
        </button>
      </div>
    </div>
  );
}
