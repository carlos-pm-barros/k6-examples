import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    iteractions: 1,
};

export function handleSummary(data) {
    return {
      "summary_smoke_test_01.html": htmlReport(data),
    };
  }
  
export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/');
}