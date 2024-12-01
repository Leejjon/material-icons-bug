import type { MetaFunction } from "@remix-run/node";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <AccessAlarmIcon />
    </div>
  );
}
