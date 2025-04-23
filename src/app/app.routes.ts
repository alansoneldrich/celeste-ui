import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { StatusComponent } from './components/status/status.component';
import { MemoryComponent } from './components/memory/memory.component';

export const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'status', component: StatusComponent },
  { path: 'memory', component: MemoryComponent }
];
