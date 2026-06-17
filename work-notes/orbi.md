# Troubleshooting Brave Browser Freezes on Surface (Windows 11)

If your Brave browser and Surface device run perfectly abroad but freeze/sluggishly crash at home in Boston, the issue is likely tied to your local network configuration (Orbi Wi-Fi) or hardware conflicts.

---

## Part 1: Network & Browser Fixes

### 1. Mesh Network Roaming Issues (Orbi)
Mesh networks broadcast both 2.4 GHz and 5 GHz bands simultaneously. Surface devices frequently struggle to switch between these bands or between the router and satellites when they are too close together.
* **The Fix:** Log into your Orbi router settings or use the Netgear Orbi App. Temporarily disable **Fast Roaming** or **Implicit Beamforming**. These features often cause dropouts on certain Surface models.
* **Interference:** Ensure your Orbi satellites are at least 30 feet away from the main router to prevent frequency overlap.

### 2. Hardware Acceleration Conflict
Brave relies heavily on your GPU. If your display drivers are outdated, rendering certain web pages or ads can completely freeze the browser and occasionally the entire Windows 11 system.
* **The Fix:** Open Brave, go to **Settings > System**, and toggle **Hardware Acceleration**. If it was *on*, turn it *off* and relaunch. If it was *off*, turn it *on*.

### 3. DNS and IP Conflicts
Your home network's local IP address assignments or DNS resolver may be struggling, causing Brave's built-in tracker blockers to hang while establishing connections.
* **The Fix:** Flush your network settings. Open the Windows Command Prompt as administrator and run these commands one at a time, followed by a PC reboot:
  ```cmd
  netsh winsock reset
  netsh int ip reset
  ipconfig /flushdns
  ```

### 4. Extensions or "Eco Mode"
You might have browser extensions that attempt to sync your settings with cloud servers, which hang when connecting over your home network but worked fine in Europe.
* **The Fix:** Check if Brave is running in **Eco/Efficiency Mode** in your Windows Task Manager and disable it. Try opening Brave in an **Incognito Window** to see if a synced extension is causing the freeze.

---

## Part 2: How to Change Your Account to Administrator

*Note: To change your account type, you must currently be logged into an account that already has admin rights, or know the password to one.*

### Method 1: Using Windows Settings
1. Press the **Windows Key + I** to open **Settings**.
2. Click on **Accounts** in the left sidebar.
3. Select **Other users** (or *Family & other users*).
4. Click the **arrow icon** next to your account name.
5. Click **Change account type**.
6. Select **Administrator** from the dropdown menu and click **OK**.

### Method 2: Using Control Panel
1. Press the **Windows Key**, type **Control Panel**, and press **Enter**.
2. Click **Change account type** underneath the *User Accounts* category.
3. Click on the **User Account** you want to change.
4. Click **Change the account type** on the left side.
5. Select the **Administrator** radio button.
6. Click the **Change Account Type** button to save.

### Method 3: Using Command Prompt (Quickest)
1. Press the **Windows Key**, type **cmd**, and right-click **Command Prompt**.
2. Select **Run as administrator** (click *Yes* if a prompt appears).
3. Type the following command and press **Enter** (replace `YourUsername` with your actual Windows account name):
   ```cmd
   net localgroup administrators "YourUsername" /add
   ```
