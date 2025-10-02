import { Suspense } from "react";
import ChatbotAssistant from "./component/ChatbotAI";
import ContentPage from "./component/ContentPage";
import LoadingComponent from "./component/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ContentPage />
    </Suspense>
  );
}

export default App;
