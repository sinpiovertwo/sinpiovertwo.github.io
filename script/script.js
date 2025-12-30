const selector = document.getElementById('selector');
const tabs = document.querySelectorAll('.year');

selector.addEventListener('change', function() {
  // 1. 모든 탭을 먼저 숨깁니다.
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // 2. 선택된 option의 value와 같은 id를 가진 탭만 보여줍니다.
  const targetId = this.value;
  const targetTab = document.getElementById(targetId);

  if (targetTab) {
    targetTab.style.display = 'block';
  }
});