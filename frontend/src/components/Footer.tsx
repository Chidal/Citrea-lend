import { CameraIcon, ChatBubbleLeftIcon, UsersIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary p-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-highlight">
        <p>© 2025 Citrea-Lend</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-secondary"><CameraIcon className="h-6 w-6" /></a> {/* Instagram substitute */}
          <a href="#" className="hover:text-secondary"><ChatBubbleLeftIcon className="h-6 w-6" /></a> {/* Twitter substitute */}
          <a href="#" className="hover:text-secondary"><UsersIcon className="h-6 w-6" /></a> {/* Facebook substitute */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;